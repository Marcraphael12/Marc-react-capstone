import { fetchFromApi } from '../countryData';

describe('fetching from api', () => {
  test('data contains object indeed', async () => {
    const data = await fetchFromApi();
    expect.objectContaining(data);
  });

  test('data have property countries', async () => {
    const data = await fetchFromApi();
    expect(data).toHaveProperty('countries');
  });
});