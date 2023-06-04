import { styled } from "@fluentui/react";
import { IMoviesPageProps, IMoviesPageStyleProps, IMoviesPageStyles } from './moviesPage.types';
import { MoviesPageStyles } from './moviesPage.styles';
import { MoviesPageBase } from "./moviesPage.base";

export const MoviesPage = styled<IMoviesPageProps, IMoviesPageStyleProps, IMoviesPageStyles>(MoviesPageBase, MoviesPageStyles)