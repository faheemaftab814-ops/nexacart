import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nexacart.example',
      lastModified: new Date(),
    },
    {
      url: 'https://nexacart.example/about',
      lastModified: new Date(),
    },
    {
      url: 'https://nexacart.example/contact',
      lastModified: new Date(),
    },
  ];
}
