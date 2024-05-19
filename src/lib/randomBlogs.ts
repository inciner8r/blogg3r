import { BlogPost } from "@/types/types";

// Function to shuffle an array
function shuffleArray(array: BlogPost[]): BlogPost[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to pick random 6 blog posts
export function pickRandomSixBlogPosts(blogPosts: BlogPost[]): BlogPost[] {
    // Shuffle the blog posts
    const shuffledBlogPosts = shuffleArray(blogPosts);

    // Return the first 6 elements
    return shuffledBlogPosts.slice(0, 6);
}