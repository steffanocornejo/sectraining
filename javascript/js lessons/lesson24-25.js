export function playGuitar() {
    return "Playing guitar!";
};

export const shredding = () => {
    return "Shredding some licks!";
};

export const plucking = () => {
    return "Plucking the strings...";
};

// higher order functions
// either:
// 1) takes function as parameter/argument
// 2) returns a function as ther result

import { posts } from "./posts.js";

posts.forEach((post) => {
    console.log(post);
});
console.clear();

const filteredPosts = posts.filter((post) => {
    return post.userId === 1;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts)

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);