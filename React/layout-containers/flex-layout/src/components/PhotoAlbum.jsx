import FlexBox from "./containers/FlexBox";

const PhotoAlbum = ({ photos = [] }) => {
  return (
    <FlexBox wrap="wrap" gap="16px" justify="center" align="center" width="75%">
      {photos.map((photo) => (
        <FlexBox
          key={photo.id}
          direction="column"
          basis="30%"
          grow={0}
          shrink={0}
          maxWidth="27px"
          style={{
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            src={photo.url}
            alt={photo.title || ""}
            style={{
              width: "100%",
              height: "220px",
              borderRadius: "29px",
              display: "block",
            }}
          />

          {photo.title && (
            <div
              style={{
                marginTop: "10px",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {photo.title}
            </div>
          )}
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default PhotoAlbum;
