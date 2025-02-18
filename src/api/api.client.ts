import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/creator-roles",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/creators",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/creators/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/developers",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/developers/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "search",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "search_precise",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "search_exact",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "parent_platforms",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "platforms",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "stores",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "developers",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "publishers",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "genres",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "tags",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "creators",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "dates",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "updated",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "platforms_count",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "metacritic",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "exclude_collection",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "exclude_additions",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "exclude_parents",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "exclude_game_series",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "exclude_stores",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:game_pk/additions",
    requestFormat: "json",
    parameters: [
      {
        name: "game_pk",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:game_pk/development-team",
    requestFormat: "json",
    parameters: [
      {
        name: "game_pk",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:game_pk/game-series",
    requestFormat: "json",
    parameters: [
      {
        name: "game_pk",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:game_pk/parent-games",
    requestFormat: "json",
    parameters: [
      {
        name: "game_pk",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:game_pk/screenshots",
    requestFormat: "json",
    parameters: [
      {
        name: "game_pk",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:game_pk/stores",
    requestFormat: "json",
    parameters: [
      {
        name: "game_pk",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:id/achievements",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:id/movies",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:id/reddit",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:id/suggested",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:id/twitch",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/games/:id/youtube",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/genres",
    requestFormat: "json",
    parameters: [
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/genres/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/platforms",
    requestFormat: "json",
    parameters: [
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/platforms/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/platforms/lists/parents",
    description: `For instance, for PS2 and PS4 the “parent platform” is PlayStation.`,
    requestFormat: "json",
    parameters: [
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/publishers",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/publishers/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/stores",
    requestFormat: "json",
    parameters: [
      {
        name: "ordering",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/stores/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/tags",
    requestFormat: "json",
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/tags/:id",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
