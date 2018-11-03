import { windowCount } from 'rxjs/internal/operators/windowCount';
import { Operation } from 'rxjs/internal/types';
import { pipe } from 'rxjs/internal/util/pipe';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { toArray } from 'rxjs/internal/operators/derived/toArray';

export function bufferCount<T>(
  bufferSize: number,
  startBufferEvery: number = 0,
): Operation<T, T[]> {
  return pipe(
    windowCount(bufferSize, startBufferEvery),
    mergeMap(toArray()),
  );
}