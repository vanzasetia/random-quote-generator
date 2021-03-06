(function () {
  'use strict'
  const data = [
    {
      author: 'Thomas Fuller',
      quote: 'All things are difficult, before they are easy.'
    },
    {
      author: 'Zig Ziglar',
      quote: "You don't have to be great to start, but you need to start to be great!"
    },
    {
      author: 'Anonymous',
      quote: "Don't let someone who does not know your value tell you how much you're worth!"
    },
    {
      author: 'Helen Hayes',
      quote: 'The expert at anything was once a beginner.'
    },
    {
      author: 'Stephen McCranie',
      quote: 'The master has failed more times than the beginner has even tried.'
    },
    {
      author: 'John C. Maxwell',
      quote: 'If we’re growing, we’re always going to be out of our comfort zone.'
    }
  ]

  const generateQuoteBtn = document.querySelector('.js-generateQuoteBtn')
  const quoteEl = document.querySelector('.js-quoteEl')
  const authorEl = document.querySelector('.js-authorEl')
  const yearEl = document.querySelector('.js-yearEl')

  document.addEventListener('DOMContentLoaded', renderCurrentYear)
  generateQuoteBtn.addEventListener('click', generateRandomQuote)

  function renderCurrentYear () {
    yearEl.textContent = new Date().getFullYear()
  }

  function generateRandomQuote () {
    const randomNumber = Math.floor(Math.random() * data.length)
    authorEl.textContent = data[randomNumber].author
    quoteEl.textContent = data[randomNumber].quote
  }
})()
