import Image from 'next/image';

const ContributorsList = ({ contributors }) => {
  return (
    <div className="container">
      {Array.isArray(contributors) &&
        contributors.map((contributor) => (
          <a href={contributor.html_url} key={contributor.id}>
            <Image
              className="rounded-circle"
              src={contributor.avatar_url}
              width={40}
              height={40}
            />
          </a>
        ))}
    </div>
  );
};

export default ContributorsList;