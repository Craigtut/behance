import Behance from '../src/index';
const be = new Behance({ apiKey: 'nKB9RXAjgAEMSqgnjSbeotP8cWDeaY8i' });

test('Should load project with id', done => {
  be.project('41622297').then((data) => {
    expect(data.creator_id).toBe('7168409');
    done();
  }).catch((error) => {
    expect(error).toBe(undefined);
    done();
  });
});
