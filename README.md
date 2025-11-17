1.Differences between interfaces and types in TypeScript

Interface এবং type মূলত ডাটা স্ট্রাকচার। কিন্তু interface শুধু অবজেক্টের স্ট্রাকচার তৈরি করতে ব্যবহৃত হয়। তবে interface extend করা যায়, 
অর্থাৎ একাধিক interface একত্র করে একটা নতুন interface তৈরি করা যায় এবং নতুন প্রপার্টি ও যোগ করা যায় and ক্লাস implement করতে পারে।
উদাহরণস্বরূপ: 
interface Student {
name:string;
age:number;
}
interface Player extends Student{
studentId:number;
}
কিন্তু type শুধু অবজেক্টের স্ট্রাকচার তৈরি করতে সীমাবদ্ধ নয়। type ব্যবহার করে Union এবং Intersection টাইপ তৈরি করা যায়। 
ফাংশন, অ্যারে বা যেকোনো ধরনের টাইপ ডিফাইন করতেও type ব্যবহার করা যায়।নিজের মত করে টাইপ ডিফাইন করা যায়
Union Type আর Function Type এর উদাহরণ:(1).let id: string | number; 
(2).type Add = (a: number, b: number) => number;
const add: Add = (x, y) => {
  return x + y;
};

2.Use of keyof keyword in typescript

TypeScript-এ keyof কীওয়ার্ড খুবই গুরুত্বপূর্ণ। এটি মূলত কোনো অবজেক্টের সব কী (key) গুলোকে ধরার জন্য ব্যবহার হয় এবং 
সেগুলোকে একটি ইউনিয়ন টাইপের মতো করে তৈরি করে। অর্থাৎ, keyof অবজেক্টের সব কী-গুলোকে এক এক করে নিয়ে এনে একটি ইউনিয়ন টাইপ হিসেবে প্রকাশ করে।
উদাহরণস্বরূপ: 
type Car = {
  brand: string;
  model: string;
  year: number;
};
type CarKeys = keyof Car;
Car টাইপের key গুলোকে ধারণ করা হলো.যার আউটপুট হবে :"brand" | "model" | "year" অর্থাৎ Car অবজেক্টের সব কী গুলোর ইউনিয়ন টাইপ।
