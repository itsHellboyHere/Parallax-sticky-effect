<>
  {/* SECTION 1: Solid Content */}
  <div style={{ background: "#fff", zIndex: 10, position: "relative" }}>
    <PageIntro />
  </div>

  {/* SECTION 2: The Parallax "Window" */}
  <ParallaxLayer zIndex={1} trackHeight="100vh" speed={1}>
     <Image src="/mood-shot.jpg" fill className="object-cover" />
     <div className="overlay">
        <h2>A glimpse into our process</h2>
     </div>
  </ParallaxLayer>

  {/* SECTION 3: Another Solid Content Layer */}
  <div style={{ background: "#f7f6f4", zIndex: 10, position: "relative" }}>
    <ProductsSection />
  </div>
</>
