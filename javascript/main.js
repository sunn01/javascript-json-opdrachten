//opdracht 1a

const person = `
{
    "firstname": "Judeska",
    "email": "judeska@example.com"
}
    `;

const jsonPerson = JSON.parse(person);
console.log('voornaam is:', jsonPerson.firstname);
console.log('email is:', jsonPerson.email);

//opdracht 1b

const personInfo = `
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
}
    `;

const jsonInfo = JSON.parse(personInfo);
console.log('id is:', jsonInfo.id);
console.log('voornaam is:', jsonInfo.firstname);
console.log('achternaam is:', jsonInfo.lastname);

//opdracht 2

const video = `
{
  "id": 1,
  "slug": "lorem-ipsum",
  "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
  "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "status": "published",
  "category": "lorem",
  "publishedAt": "04/02/2023 13:25:21",
  "updatedAt": "14/03/2023 17:22:20",
  "userId": 1
}
    `;
const jsonVideo = JSON.parse(video);
console.log('titel is:', jsonVideo.title);
console.log('content:', jsonVideo.content);
console.log('published at:', jsonVideo.publishedAt);

//opdracht 3

const info = `
{
    "id": 4,
        "firstname": "Emily",
            "lastname": "Davis",
                "email": "emilydavis@example.com",
                    "birthDate": "1974-11-30",
                        "login": {
        "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
            "username": "emilydavis",
                "password": "jsonplaceholder.org",
                    "md5": "c1328472c5794a25723600f71c1b4586",
                        "sha1": "35544a31cc19bd6520af116554873167117f4d94",
                            "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
        "street": "321 Maple Street",
            "suite": "Apt. 50",
                "city": "Anytown",
                    "zipcode": "12345-6789",
                        "geo": {
            "lat": "42.9012",
                "lng": "-71.5678"
        }
    },
    "phone": "(555) 555-3456",
        "website": "www.emilydavis.com",
            "company": {
        "name": "GHI Corporation",
            "catchPhrase": "Your success is our priority",
                "bs": "Consulting"
    }
}
`;

const jsonInfo1 = JSON.parse(info);
console.log('email is:', jsonInfo1.email);
console.log('gebruikersnaam is:', jsonInfo1.login.username);
console.log('stad is:', jsonInfo1.address.city);
console.log('bedrijfsnaam', jsonInfo1.company.name);

//opdracht 4

const users = `
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
  }
  `;
const jsonUser = JSON.parse(users);
console.log(jsonUser);

//opdracht 5

const postUser = `
  [
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]
  `;
const jsonPostUser = JSON.parse(postUser);
console.log();