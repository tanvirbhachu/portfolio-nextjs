export default function CircleIcon({ Icon }) {
  return (
    <div className={`icon orbit orbit-backward group-hover:orbit-stop`}>
        <div className="text-transparent group-hover:text-white transition-all ease-in duration-300 delay-150">
            <Icon fontSize={25} />
        </div>
    </div>
  );
}