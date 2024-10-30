const Project = ({ item }) => {
  const { title, img, description, link, tech } = item;
  return (
    <a href={link} target="_blank">
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/2">
          <img
            src={img}
            alt={title}
            className="mb-6 rounded"
            width={300}
            height={300}
          />
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-6 font-semibold">{title}</h6>
          <p className="mb-4 text-neutral-400">{description}</p>
          {tech.map((i, index) => (
            <span
              key={index}
              className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
