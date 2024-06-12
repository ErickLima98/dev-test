import { ExternalApiUrl } from 'src/core/constants/external-api.constants';

export class GetDataService {
  async getPhotoDetails(photoId: string): Promise<any> {
    try {
      const photoResponse = await fetch(
        `${ExternalApiUrl}/photos/${photoId}`,
      ).then((res) => res.json());

      const albumResponse = fetch(
        `${ExternalApiUrl}/albums/${photoResponse.albumId}`,
      ).then((res) => res.json());
      const userResponse = albumResponse.then((album) =>
        fetch(`${ExternalApiUrl}/users/${album.userId}`).then((res) =>
          res.json(),
        ),
      );

      const [album, user] = await Promise.all([albumResponse, userResponse]);

      return {
        ...photoResponse,
        album: {
          ...album,
          user: {
            ...user,
          },
        },
      };
    } catch (error) {
      console.error('Error fetching photo details:', error);
      throw error;
    }
  }

  async fetchAllData() {
    const users = await fetch(`${ExternalApiUrl}/users`);
    const albums = await fetch(`${ExternalApiUrl}/albums`);
    const photos = await fetch(`${ExternalApiUrl}/photos`);

    const userJson = await users.json();
    const albumsJson = await albums.json();
    const photosJson = await photos.json();
    return {
      users: userJson,
      albums: albumsJson,
      photos: photosJson,
    };
  }

  filterPhotos(query, photos, albums, users) {
    const {
      title,
      'album.title': albumTitle,
      'album.user.email': userEmail,
    } = query;
    return photos.filter((photo: { albumId: any; title: string | any[]; }) => {
      const album = albums.find((album: { id: any; }) => album.id === photo.albumId);
      const user = album
        ? users.find((user: { id: any; }) => user.id === album.userId)
        : null;

      return (
        (!title || photo.title.includes(title)) &&
        (!albumTitle || album.title.includes(albumTitle)) &&
        (!userEmail || user.email === userEmail)
      );
    });
  }

  async getFilteredPhotos(query) {
    const { users, albums, photos } = await this.fetchAllData();
    const filteredPhotos = this.filterPhotos(query, photos, albums, users);

    const limit = query.limit ? parseInt(query.limit) : 25;
    const offset = query.offset ? parseInt(query.offset) : 0;

    const paginatedResults = filteredPhotos.slice(offset, offset + limit);

    return paginatedResults.map((photo: { albumId: any }) => {
      const album = albums.find(
        (album: { id: any }) => album.id === photo.albumId,
      );
      const user = album
        ? users.find((user: { id: any }) => user.id === album.userId)
        : null;

      return {
        ...photo,
        album: {
          ...album,
          user: {
            ...user,
          },
        },
      };
    });
  }
}
