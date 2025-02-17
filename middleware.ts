import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/welcome' };

export async function middleware() {
  const projects = await get('projects');
  
  return NextResponse.json(projects);
}