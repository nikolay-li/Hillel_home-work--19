//Task 

//1. Створити функції getData, за допомогою fetch +  async \ await , яка прийматиме параметр url, яким потрібно зробити запит і повертає отримане значення.

//Використовуйте https://jsonplaceholder.typicode.com/posts

//2. Додайте всередину функції фільтрацію вихідного значення.

//Наприклад: відфільтрувати масив, щоб залишилися дані користувача з "userId": 1

const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {
  console.log('Fetch todo started...')
  const response = await fetch(url)
  const data = await response.json()
  console.log('Data', data)
  const filtered = await data.filter(user => user.userId === 1)
  console.log('filtered',filtered)
}

getData()