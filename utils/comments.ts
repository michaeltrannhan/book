import { faker } from "@faker-js/faker";
export type Comment = {
  id: number;
  bookId: string;
  firstName: string;
  lastName: string;
  content: string;
  subComment?: Comment;
};
export default function generateComments() {
  let comments: Comment[] = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let bookId = faker.number.int({ min: 1, max: 20 });
    let content = faker.lorem.paragraph();

    comments.push({
      id: id,
      bookId: bookId.toString(),
      firstName: firstName,
      lastName: lastName,
      content: content,
    });
  }

  return { data: comments };
}
