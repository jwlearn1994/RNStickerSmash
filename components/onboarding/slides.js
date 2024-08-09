const testImage = () => ({
  uri: 'https://placehold.co/300x200/000000/white.jpg?font=lato',
  width: 300,
  height: 200,
});

export default [
  {
    id: '1',
    title: 'Quick & Easy Payments',
    description: 'Grow your business by accepting card payments via the Stripe API',
    image: testImage(),
  },
  {
    id: '2',
    title: 'Smart Point of Sale',
    description: 'Complete point of sale software tailored to your business needs',
    image: testImage(),
  },
  {
    id: '3',
    title: 'Instant Notifications',
    description: 'Instant notifications let your quickly see new purchases and messages',
    image: testImage(),
  },
  {
    id: '4',
    title: 'Customize Everything',
    description: 'Adjust your system to speed up your checkout',
    image: testImage(),
  },
  {
    id: '5',
    title: 'Track Everything',
    description: 'See all your business data in one location',
    image: testImage(),
  },
]