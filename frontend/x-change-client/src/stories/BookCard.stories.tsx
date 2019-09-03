import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "semantic-ui-css/semantic.min.css";
import { BookCard } from "../components/molecules/BookCard";

import bookCoverImage1 from "./bookcover-code.jpg";
import bookCoverImage2 from "./bookcover-bad-blood.jpg";

storiesOf("BookCard", module)
  .add("Book1", () => (
    <BookCard
      title="Code"
      author="Charles Petzold"
      category="Development"
      description="The Hidden Language of Computer Hardware and Software"
      onClick={action("BookCard Clicked")}
      bookCover={bookCoverImage1}
    />
  ))
  .add("Book2", () => (
    <BookCard
      title="Bad Blood"
      author="John Carreyrou"
      category="Business"
      description="Secrets and Lies in a Silicon Valley Startup"
      onClick={action("BookCard Clicked")}
      bookCover={bookCoverImage2}
    />
  ));
