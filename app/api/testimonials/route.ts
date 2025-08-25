import { groq } from 'next-sanity';
import serverConfig from '@/state/sanity/serverConfig';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const data = await serverConfig.fetch(groq`
      *[_type == 'testimonials']{
      'image': Image.asset->url, 
      content, 
      title, 
      'mainimage': mainImage.asset->url
      }
      `);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
