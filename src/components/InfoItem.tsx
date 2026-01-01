interface InfoItemProps {
  title: string;
  value: string;
}

export default function InfoItem({ title, value }: InfoItemProps) {
  return (
    <div className="info">
      <h3 className="info-title">{title}</h3>
      <p className="info-subtitle">{value}</p>
    </div>
  );
}
