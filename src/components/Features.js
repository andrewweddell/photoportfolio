const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Built for speed and efficiency.",
    },
    {
      icon: "⚡",
      title: "Modern Design",
      description: "Clean and minimal design principles.",
    },
    {
      icon: "💡",
      title: "Creative Solutions",
      description: "Tailored for your creative needs.",
    },
  ];
  
  const Features = () => {
    return (
      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Features You'll Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  