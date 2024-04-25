import { ProductDescriptionWrapper } from "./ProductDesctiptionStyles";
import { useState } from "react";

const ProductsDescription = () => {
  const TAB_CONTENT = [
    {
      id: 1,
      title: "Description",
      content: `The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.
        *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
        **65C2 Stand model is at a minimum 39% lighter than the C1 series. More...
         `,
    },
    {
      id: 2,
      title: "Specification",
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: 3,
      title: "Reviews",
      content: `The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.
          *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
          **65C2 Stand model is at a minimum 39% lighter than the C1 series. More...
           `,
    },
  ];
  const [activeContent, setActiveContent] = useState(TAB_CONTENT[0]);

  return (
    <ProductDescriptionWrapper>
      <div className="container">
        <div className="tabs">
          <div className="content">
            <div className="wrapper">
              {" "}
              {TAB_CONTENT.map((content) => (
                <div
                  key={content.id}
                  className={`tab ${
                    activeContent.id === content.id ? "active" : ""
                  }`}
                  onClick={() => setActiveContent(content)}
                >
                  {content.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="text-content">
            <p>{activeContent.content}</p>
          </div>
        </div>
      </div>
    </ProductDescriptionWrapper>
  );
};

export default ProductsDescription;
