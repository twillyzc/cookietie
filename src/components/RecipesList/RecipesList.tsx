import React, { useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { WindowScroller } from 'react-virtualized';

import { recipesMoreRequest } from 'store/actions/recipes.actions';
import { RecipesState } from 'store/types/recipes.types';
import { RootState } from 'store/reducers';

export const RecipesList = () => {
  const dispatch = useDispatch();

  const { items, totalResults }: RecipesState = useSelector((state: RootState) => state.recipes);

  const listRef = useRef<any>(null);

  const onScroll = useCallback(({ scrollTop }) => {
    listRef.current?.scrollTo(scrollTop);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = useCallback(
    async () => {
      setIsLoading((prevState) => !prevState);
      try {
        await dispatch(recipesMoreRequest('pasta', items.length));
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading((prevState) => !prevState);
      }
    },
    // eslint-disable-next-line
    [dispatch]
  );

  const hasMoreItems = totalResults - items.length > 0;

  const itemCount = hasMoreItems ? items.length + 1 : items.length;

  const isItemLoaded = (index: number) => !hasMoreItems || index < items.length;

  const Item = ({ style, index }: any) => {
    if (!isItemLoaded(index)) {
      return <div style={style}>Loading...</div>;
    }
    return <div style={style}>{items[index].title}</div>;
  };

  if (!items.length && !isLoading) return <>Search something</>;

  return (
    <>
      <WindowScroller onScroll={onScroll}>{() => <></>}</WindowScroller>

      <AutoSizer disableHeight>
        {({ width }) => (
          <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
            {({ onItemsRendered, ref }) => (
              <List
                onItemsRendered={onItemsRendered}
                ref={(list) => {
                  //@ts-ignore
                  ref(list);
                  listRef.current = list;
                }}
                height={window.innerHeight * 4}
                itemCount={itemCount}
                itemSize={65}
                width={width}
                style={{ height: '100% !important' }}
              >
                {Item}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </>
  );
};
