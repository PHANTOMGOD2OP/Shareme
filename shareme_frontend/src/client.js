import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '6fb9zwuo',
  dataset: 'production',
  apiVersion: '2023-05-09',
  useCdn: true,
  token:'skkgWUcwveKIqMqVZhzPX9nQFyeTmauPPd3b2W5YqnyGUrY17FgMYSTuiHAYFBBiG8l1PiHu6ni7IMmRjKKObyYSfE3lvvp5moL066HPxTE8OmrOLvop3ZU71O0B9drdtYHAGiDdnMLYLIuWQdUbgzlHp2RfsRf19ux9lACn2T7PjuUyRLwd',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);