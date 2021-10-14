const favoriteGenres = (
  userSongs: Record<string, string[]>,
  songGenres: Record<string, string[]>,
): Record<string, string[]> => {
  const res: Record<string, Record<string, number>> = {};

  for (const key in userSongs) {
    if (Object.prototype.hasOwnProperty.call(userSongs, key)) {
      const value = userSongs[key];

      const genres = Object.keys(songGenres).map((el) => songGenres[el]);

      if (genres.length === 0) {
        res[key] = {};
        continue;
      }

      value.forEach((val) => {
        for (const key2 in songGenres) {
          if (Object.prototype.hasOwnProperty.call(songGenres, key2)) {
            const value2 = songGenres[key2];
            if (value2.includes(val)) {
              if (res[key]) {
                if (res[key][key2]) {
                  res[key][key2] += 1;
                } else {
                  res[key][key2] = 1;
                }
              } else {
                res[key] = {
                  [key2]: 1,
                };
              }
            }
          }
        }
      });
    }
  }

  const ans: Record<string, string[]> = {};

  for (const key in res) {
    if (Object.prototype.hasOwnProperty.call(res, key)) {
      const value = res[key];
      const scores = Object.keys(value).map((el2) => value[el2]);
      const maxValue = Math.max(...scores);
      ans[key] = [];
      for (const ket2 in value) {
        if (Object.prototype.hasOwnProperty.call(value, ket2)) {
          const val2 = value[ket2];
          if (val2 === maxValue) {
            ans[key].push(ket2);
          }
        }
      }
    }
  }

  return ans;
};

console.log(
  favoriteGenres(
    {
      David: ['song1', 'song2', 'song3', 'song4', 'song8'],
      Emma: ['song5', 'song6', 'song7'],
    },
    {
      Rock: ['song1', 'song3'],
      Dubstep: ['song7'],
      Techno: ['song2', 'song4'],
      Pop: ['song5', 'song6'],
      Jazz: ['song8', 'song9'],
    },
  ),
);

console.log(
  favoriteGenres(
    {
      David: ['song1', 'song2'],
      Emma: ['song3', 'song4'],
    },
    {},
  ),
);
