import { createClient } from 'pexels';

export const getPhoto = async ({name}) => {
    const client = createClient(
        "RE64qpOhv42DLAg9pBgJe6aEP6q6iklh7Z3f1iZFQGwQd23Sawufopdb"
    );
    const query = {name};

    try {
        const photos = await client.photos.search({ query, per_page: 1 });
        return photos?.photos[0]?.src?.landscape
    } catch (error) {
        console.error("Error fetching photos:", error);
        return null; // Return null in case of an error
    }
};
