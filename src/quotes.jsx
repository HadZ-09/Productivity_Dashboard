import React, { useState, useEffect } from 'react';
import './quotes.css';

function Quotes()
{
    


    const quotes = [
        { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        { text: "The tiger does not shout its strength; it simply hunts.", author: "Zen Proverb" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "F.D. Roosevelt" },
        { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
{ text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
{ text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
{ text: "I think, therefore I am.", author: "René Descartes" },
{ text: "The only thing I know is that I know nothing.", author: "Socrates" },
{ text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
{ text: "The unexamined life is not worth living.", author: "Socrates" },
{ text: "Happiness depends upon ourselves.", author: "Aristotle" },
{ text: "To be is to be perceived.", author: "George Berkeley" },
{ text: "Entities should not be multiplied unnecessarily.", author: "William of Ockham" },
{ text: "God is dead! He remains dead! And we have killed him!", author: "Friedrich Nietzsche" },
{ text: "Man is condemned to be free.", author: "Jean-Paul Sartre" },
{ text: "Hell is other people.", author: "Jean-Paul Sartre" },
{ text: "One cannot step twice into the same river.", author: "Heraclitus" },
{ text: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.", author: "John Milton" },
{ text: "Knowledge is power.", author: "Francis Bacon" },
{ text: "The life of man is solitary, poor, nasty, brutish, and short.", author: "Thomas Hobbes" },
{ text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
{ text: "The only constant in life is change.", author: "Heraclitus" },
{ text: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.", author: "Immanuel Kant" },
{ text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
{ text: "Our life is what our thoughts make it.", author: "Marcus Aurelius" },
{ text: "The price of greatness is responsibility.", author: "Winston Churchill" },
{ text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
{ text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
{ text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
{ text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
{ text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
{ text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
{ text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
{ text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
{ text: "I have no special talent. I am only passionately curious.", author: "Albert Einstein" },
{ text: "Science without religion is lame, religion without science is blind.", author: "Albert Einstein" },
{ text: "The only source of knowledge is experience.", author: "Albert Einstein" },
{ text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
{ text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
{ text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
{ text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
{ text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
{ text: "Experience is simply the name we give our mistakes.", author: "Oscar Wilde" },
{ text: "The truth is rarely pure and never simple.", author: "Oscar Wilde" },
{ text: "No legacy is so rich as honesty.", author: "William Shakespeare" },
{ text: "To be, or not to be, that is the question.", author: "William Shakespeare" },
{ text: "All the world's a stage, and all the men and women merely players.", author: "William Shakespeare" },
{ text: "The only way to have a friend is to be one.", author: "Ralph Waldo Emerson" },
{ text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
{ text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.", author: "Ralph Waldo Emerson" },
{ text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
{ text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
{ text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" }
    ];

    const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setCurrentQuote(randomQuote);
    }, []);

    return (
        <div className="quote-container">
            <p className="quote-text">"{currentQuote.text}"</p>
            <span className="quote-author">{currentQuote.author}</span>
        </div>
    );
}

export default Quotes;
    