import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { POST_API } from "../../constants/api";
import { getAllData } from "../../services";
import moment from "moment";

const setDataPost = (dataPost) => {
  const allData: any[] = [];
  dataPost.map((item) => {
    const categories: string[] = [];
    item.Post_Categories.map((element) => {
      categories.push(element.Category.Name);
    });

    const newData = {
      Id: item.Id,
      AuthorId: item.Author.Name,
      AuthorAvatar: item.Author.Avatar,
      CreateAt: moment(item.CreateAt).format("MMMM Do YYYY"),
      Title: item.Title,
      Banner: item.Banner,
      Content: item.Content,
      Category: categories,
    };
    allData.push(newData);
  });

  return allData;
};

const PostList = () => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    const getData = async () => {
      const dataPostDetail = setDataPost(await getAllData(POST_API));

      setData(dataPostDetail);
    };

    getData();
  }, []);

  return (
    <div className="post-list">
      {
        data.map((item) => (
          <PostCard item={item} />
        ))
      }
    </div>
  );
};

export default PostList;
