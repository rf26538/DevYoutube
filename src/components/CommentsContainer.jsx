import React from "react"
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Rehan Fazal",
    text: "Lorum ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rehan Fazal",
    text: "Lorum ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Rehan Fazal",
        text: "Lorum ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Rehan Fazal",
        text: "Lorum ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Rehan Fazal",
            text: "Lorum ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Rehan Fazal",
            text: "Lorum ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Rehan Fazal",
                text: "Lorum ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
              {
                name: "Rehan Fazal",
                text: "Lorum ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Rehan Fazal",
                    text: "Lorum ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Rehan Fazal",
                        text: "Lorum ipsum dolor sit amet, consectetur adip",
                        replies: [
                          {
                            name: "Rehan Fazal",
                            text: "Lorum ipsum dolor sit amet, consectetur adip",
                            replies: [],
                          },
                          {
                            name: "Rehan Fazal",
                            text: "Lorum ipsum dolor sit amet, consectetur adip",
                            replies: [],
                          },
                          {
                            name: "Rehan Fazal",
                            text: "Lorum ipsum dolor sit amet, consectetur adip",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Fazal",
    text: "Lorum ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Rehan Fazal",
        text: "Lorum ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Rehan Fazal",
        text: "Lorum ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Rehan Fazal",
            text: "Lorum ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Rehan Fazal",
            text: "Lorum ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Rehan Fazal",
                text: "Lorum ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
              {
                name: "Rehan Fazal",
                text: "Lorum ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Fazal",
    text: "Lorum ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rehan Fazal",
    text: "Lorum ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rehan Fazal",
    text: "Lorum ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
		  <CommentsList data={commentsData}/>
    </div>
  )
}

export default CommentsContainer