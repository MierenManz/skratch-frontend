interface Props {
  name: string;
}

export default function Label({ name }: Props) {
  return <div className="my-1"><span className="badge rounded-pill bg-primary py-0">
    <p className="h6 mx-3 fw-bold">Label</p>
    <p className="small mb-1">{name}</p>
  </span>
  </div>
}