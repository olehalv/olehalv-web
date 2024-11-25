import { Studio } from 'sanity';
import { config } from './sanity.config.ts';

const StudioRoute = () => {
  return (
    <div className="studio">
      <Studio config={config} />
    </div>
  );
};

export default StudioRoute;
