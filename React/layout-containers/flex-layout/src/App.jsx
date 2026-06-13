import Cards from "./components/Cards";
import FlexBox from "./components/containers/FlexBox";
import PhotoAlbum from "./components/PhotoAlbum";

function App() {
  const photos = [
    {
      id: 1,
      title: "Nature",
      url: "https://picsum.photos/id/1015/600/600/",
    },
    {
      id: 2,
      title: "SunSet",
      url: "https://picsum.photos/id/1016/600/600/",
      //   if the image is in the assets
      // import photo_name from "path_to_photo.jpg"
      // url: photo_name
    },
    {
      id: 3,
      title: "Clouds",
      url: "https://picsum.photos/id/1019/600/600/",
    },
    {
      id: 4,
      title: "Mountains",
      url: "https://picsum.photos/id/1018/600/600/",
    },
    {
      id: 5,
      title: "random",
      url: "https://picsum.photos/id/1020/600/600/",
    },
    {
      id: 6,
      title: "random",
      url: "https://picsum.photos/id/1021/600/600/",
    },
    {
      id: 7,
      title: "random",
      url: "https://picsum.photos/id/1023/600/600/",
    },
    {
      id: 8,
      title: "random",
      url: "https://picsum.photos/id/1024/600/600/",
    },
    {
      id: 9,
      title: "random",
      url: "https://picsum.photos/id/1025/600/600/",
    },
    {
      id: 10,
      title: "random",
      url: "https://picsum.photos/id/1026/600/600/",
    },
  ];

  return (
    <>
      {/* Cards display  */}
      {/* <FlexBox
        direction="column"
        justify="center"
        align="center"
        wrap="wrap"
        // border="1px solid red "
        gap="40px"
        padding="50px"
        background="#ffffff"
        // borderRadius="30px"
        height="50vh"
      >
        <h1>Flex cards Demo</h1>
        <hr />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </FlexBox> */}

      {/* flex photo album demo */}

      <FlexBox
        direction="column"
        height="90vh"
        width="75%"
        // border="1px solid red"
        background="#ffffff"
        justify="center"
        align="center"
        padding="20px"
        gap="20px"
        wrap="wrap"
        style={{ margin: "0 auto" }}
      >
        <h1>Flex Photo Album Demo</h1>
        <PhotoAlbum photos={photos} />
      </FlexBox>
    </>
  );
}

export default App;
