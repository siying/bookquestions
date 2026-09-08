import { Book } from '../types/quiz';
import { MTH_BOOKS_1_TO_10 } from './mth1to10';
import { MTH_BOOKS_11_TO_20 } from './mth11to20';

export const MAGIC_TREE_HOUSE_BOOKS: Book[] = [
  ...MTH_BOOKS_1_TO_10,
  ...MTH_BOOKS_11_TO_20,
];
