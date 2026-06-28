import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
  delay?: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  rating,
  content,
  delay,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-box-item wow fadeInUp" data-wow-delay={delay}>
      <div className="testimonial-box-header">
        <div className="author-box-image">
          <figure className="image-anime">
            <Image src={image} alt={name} width={60} height={60} style={{ objectFit: 'cover', borderRadius: '50%' }} />
          </figure>
        </div>
        <div className="author-box-content">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className="testimonial-box-body">
        <div className="testimonial-quote-img">
          <img src="/images/icon-quote.svg" alt="Quote" />
        </div>
        <div className="testimonial-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className={i < rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          ))}
        </div>
      </div>
      <div className="testimonial-box-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
