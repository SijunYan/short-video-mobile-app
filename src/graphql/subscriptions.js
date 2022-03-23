/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      songName
      songImageUri
      Posts {
        items {
          id
          videoUri
          desc
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      songName
      songImageUri
      Posts {
        items {
          id
          videoUri
          desc
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      songName
      songImageUri
      Posts {
        items {
          id
          videoUri
          desc
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      userImageUri
      Posts {
        items {
          id
          videoUri
          desc
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      userImageUri
      Posts {
        items {
          id
          videoUri
          desc
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      userImageUri
      Posts {
        items {
          id
          videoUri
          desc
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      videoUri
      desc
      userID
      user {
        id
        username
        email
        userImageUri
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        songName
        songImageUri
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      videoUri
      desc
      userID
      user {
        id
        username
        email
        userImageUri
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        songName
        songImageUri
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      videoUri
      desc
      userID
      user {
        id
        username
        email
        userImageUri
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        songName
        songImageUri
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
