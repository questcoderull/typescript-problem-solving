১. প্রশ্ন নাম্বার ১ এর উত্তর

TypeScript এ interface এবং type এর মধ্যে কিছু পার্থক্য আছে। তবে এই দুইটাই ব্যবহার করা হয় data structure define করার জন্য। তারপরও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

Interface মূলত object এর structure define করার জন্য ব্যবহার করা হয়।

আর type ব্যবহার করা হয় যেকোনো ধরনের data structure define করার জন্য।

তাই যদি object type data হয় তাহলে interface ব্যবহার করা ভালো। আর অন্য যেকোনো data structure এর জন্য type ব্যবহার করা বেশি উপযুক্ত।

Array এবং function এর ক্ষেত্রে type alias ব্যবহার করা ভালো, কারণ এটা interface এর তুলনায় বেশি clean এবং সহজভাবে লেখা যায়।

আরেকভাবে বলা যায়, type এবং interface অনেকটাই কাছাকাছি ধারণা। তবে interface সাধারণত object type data এর জন্য ব্যবহার করা হয়, যেমন object বা complex structure।

যদি data বড় হয় বা object type হয়, তাহলে interface এবং interface extend ব্যবহার করা সুবিধাজনক।

অন্যদিকে array এবং function এর ক্ষেত্রে interface ব্যবহার করলে কোড একটু জটিল হয়ে যেতে পারে।

Interface কে extends দিয়ে অন্য interface এর সাথে যুক্ত করা যায়। আর type এর ক্ষেত্রে এই কাজটি & চিহ্ন ব্যবহার করে করা হয়।

উদাহরণ interface

```ts
interface User {
  name: string;
  age: number;
}
```

interface extend এর উদাহরণ

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  id: number;
}
```

type এবং intersection এর উদাহরণ

```ts
type Person = {
  name: string;
};

type Student = Person & {
  id: number;
};
```

২. প্রশ্ন নাম্বার ২ এর উত্তর

TypeScript এ keyof keyword ব্যবহার করা হয় কোনো object type এর সব key বের করার জন্য।

অর্থাৎ, একটি object এ যেসব property থাকে, keyof ব্যবহার করলে সেগুলোর নাম একটি union type আকারে পাওয়া যায়।

উদাহরণ

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;
```

এখানে UserKeys হবে "name" | "age"

এর মানে হলো, User object এর key শুধু name এবং age এই দুইটাই হতে পারবে।

keyof keyword মূলত type safety বাড়ানোর জন্য ব্যবহার করা হয়।

এটা ব্যবহার করলে ভুল key ব্যবহার করা থেকে বাঁচা যায়।

উদাহরণ

```ts
type User = {
  name: string;
  age: number;
};

const getValue = (obj: User, key: keyof User) => {
  return obj[key];
};

const user = {
  name: "Reja",
  age: 19,
};

getValue(user, "name");
getValue(user, "age");
getValue(user, "email"); // এটা error দিবে
```

এখানে getValue function এ key হিসেবে শুধু সেই value গুলোই দেয়া যাবে যেগুলো User type এ আছে।

অন্য কোনো key দিলে TypeScript error দেখাবে।

সুতরাং, keyof keyword ব্যবহার করলে code আরো safe এবং reliable হয়।
