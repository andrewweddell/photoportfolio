import Masonry from "react-masonry-css";
import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";

const GalleryContainer = styled.section`
  padding: 50px 20px;
  background-color: #f3f3f3; /* Light grey background */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

/* Modal Styling */
const ModalContent = styled.div`
  position: relative;
  text-align: center;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal open state
  const [currentImage, setCurrentImage] = useState(null); // Current image being viewed

  const images = [
    { src: "/image1.jpg", alt: "Gallery image 1" },
    { src: "/image2.jpg", alt: "Gallery image 2" },
    { src: "/image3.jpg", alt: "Gallery image 3" },
    { src: "/image4.jpg", alt: "Gallery image 4" },
    { src: "/image5.jpg", alt: "Gallery image 5" },
    { src: "/image6.jpg", alt: "Gallery image 6" },
    { src: "/image7.jpg", alt: "Gallery image 7" },
    { src: "/image8.jpg", alt: "Gallery image 8" },
    { src: "/image9.jpg", alt: "Gallery image 9" },
  ];

  // Breakpoint settings for responsive columns
  const breakpointColumnsObj = {
    default: 5, // 5 columns for large screens
    1024: 4, // 4 columns for screen width <= 1024px
    768: 3, // 3 columns for screen width <= 768px
    480: 2, // 2 columns for screen width <= 480px
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <GalleryContainer id="gallery">
      <Title>Gallery</Title>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {images.map((image, index) => (
          <ImageWrapper key={index} onClick={() => openModal(image)}>
            <Image src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </Masonry>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Dim background
            zIndex: 1000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "none",
          },
        }}
      >
        {currentImage && (
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalImage src={currentImage.src} alt={currentImage.alt} />
          </ModalContent>
        )}
      </Modal>
    </GalleryContainer>
  );
};

export default Gallery;
