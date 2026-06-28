import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  name: string;
  slug: string;
  icon: string;
  image: string;
  description: string;
  delay?: string;
}

export default function ServiceCard({
  name,
  slug,
  icon,
  image,
  description,
  delay,
}: ServiceCardProps) {
  const serviceUrl = `/services/${slug}`;

  return (
    <div className="service-item wow fadeInUp" data-wow-delay={delay}>
      {/* Service Header Start */}
      <div className="service-header">
        {/* Service Item Box Start */}
        <div className="service-item-box">
          <div className="icon-box">
            <img src={icon} alt={name} />
          </div>
          <div className="service-item-content">
            <h3>{name}</h3>
          </div>
        </div>
        {/* Service Item Box End */}

        {/* Service Readmore Start */}
        <div className="service-readmore">
          <Link href={serviceUrl}>
            <img src="/images/arrow-accent.svg" alt="Read more" />
          </Link>
        </div>
        {/* Service Readmore End */}
      </div>
      {/* Service Header End */}

      {/* Service Body Start */}
      <div className="service-body">
        <p>{description}</p>
      </div>
      {/* Service Body End */}

      {/* Service Image Start */}
      <div className="service-image">
        <Link href={serviceUrl}>
          <figure className="image-anime">
            <Image src={image} alt={name} width={400} height={250} style={{ objectFit: 'cover' }} />
          </figure>
        </Link>
      </div>
      {/* Service Image End */}
    </div>
  );
}
