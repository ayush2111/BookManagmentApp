import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { book_title, author, image_url, category, description, book_pdf_url } = useLoaderData();
  // console.log(bookTitle)

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };


  const  handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.book_title.value;
    const authorName = form.author.value;
    const imageURL = form.image_url.value;
    const category = form.category.value;
    const bookDescription = form.description.value;
    const bookPDFURL = form.book_pdf_url.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj)

    // update the book object
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      alert("Book is updated successfully !!!")
      };
  
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update Book Data</h2>
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>

          {/* first row */}
          <div className='flex gap-8'>

            {/* book name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="book_title"
                  value="Book Title"
                />
              </div>
              <TextInput
                id="book_title"
                placeholder="Book Name"
                required
                type="text"
                name='book_title'
                className='w-full'
                defaultValue={book_title}
              />
            </div>

            {/* author name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="author"
                  value="Author Name"
                />
              </div>
              <TextInput
                id="author"
                placeholder="Author Name"
                required
                type="text"
                name='author'
                className='w-full'
                defaultValue={author}
              />
            </div>

          </div>

          {/* 2nd Row */}
          <div className='flex gap-8'>
            {/* book url */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="image_url"
                  value="Book Image URL"
                />
              </div>
              <TextInput
                id="image_url"
                placeholder="Image URL"
                required
                type="text"
                name='image_url'
                className='w-full'
                defaultValue={image_url}
              />
            </div>

            {/* book category */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="inputState"
                  value="Book Category"
                />
              </div>
              <Select
                id="inputState"
                name="category"
                className="w-full rounded"
                value={selectedBookCategory}
                onChange={handleChangeSelectedValue}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>

          </div>

          {/* full width div for book description */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="description"
                value="Book Description"
              />
            </div>
            <Textarea
              id="description"
              placeholder="Book Description"
              required
              type="text"
              name='description'
              className='w-full'
              rows={4}
              defaultValue={description}
            />
          </div>


          {/* book pdf url */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="book_pdf_url"
                value="Book PDF Link"
              />
            </div>
            <TextInput
              id="book_pdf_url"
              placeholder="Paste Book PDF URL here"
              required
              type="text"
              name='book_pdf_url'
              className='w-full'
              defaultValue={book_pdf_url}
            />
          </div>


          {/* Submit btn */}
          <Button type="submit" className='mt-5'>
            Update book
          </Button>

        </form>
      </div>
    )
  }

export default EditBooks;