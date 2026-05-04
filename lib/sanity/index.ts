/* ── Data Fetching Layer ──
   Uses Sanity when configured, falls back to mock data */

import { client, isSanityConfigured } from "./client";
import {
  allEventsQuery,
  eventBySlugQuery,
  allNewslettersQuery,
  latestNewsletterQuery,
  allBoardMembersQuery,
  allAvenuesQuery,
  eventSlugsQuery,
} from "./queries";
import {
  mockEvents,
  mockNewsletters,
  mockBoardMembers,
  mockAvenues,
} from "./mock-data";
import type { Event, Newsletter, BoardMember, Avenue } from "./types";

export async function getAllEvents(): Promise<Event[]> {
  if (!isSanityConfigured()) return mockEvents;
  return client.fetch(allEventsQuery);
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  if (!isSanityConfigured()) {
    return mockEvents.find((e) => e.slug.current === slug) || null;
  }
  return client.fetch(eventBySlugQuery, { slug });
}

export async function getAllNewsletters(): Promise<Newsletter[]> {
  if (!isSanityConfigured()) return mockNewsletters;
  return client.fetch(allNewslettersQuery);
}

export async function getLatestNewsletter(): Promise<Newsletter | null> {
  if (!isSanityConfigured()) return mockNewsletters[0] || null;
  return client.fetch(latestNewsletterQuery);
}

export async function getAllBoardMembers(): Promise<BoardMember[]> {
  if (!isSanityConfigured()) return mockBoardMembers;
  return client.fetch(allBoardMembersQuery);
}

export async function getAllAvenues(): Promise<Avenue[]> {
  if (!isSanityConfigured()) return mockAvenues;
  return client.fetch(allAvenuesQuery);
}

export async function getEventSlugs(): Promise<{ slug: string }[]> {
  if (!isSanityConfigured()) {
    return mockEvents.map((e) => ({ slug: e.slug.current }));
  }
  return client.fetch(eventSlugsQuery);
}
