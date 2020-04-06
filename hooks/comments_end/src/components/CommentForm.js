import React, { useState } from 'react';

const CommentForm = ({ onCommentSubmit }) => {

  const [author, setAuthor] = useState("")
  const [text, setText] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    const newAuthor = author.trim();
    const newText = text.trim();
    if (!newAuthor || !newText) {
      return
    }
    onCommentSubmit({author: newAuthor, text: newText});
    setAuthor("")
    setText("")
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value)
  }

  function handleTextChange(event) {
    setText(event.target.value)
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={handleAuthorChange}
      />
      <input
        type="text"
        placeholder="Say something..."
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Post" />
    </form>
  )
}

export default CommentForm;
