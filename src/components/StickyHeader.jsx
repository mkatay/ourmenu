import { Categories } from './Categories';
import { MotionTitle } from './MotionTitle';

export const StickyHeader = ({ selectedCateg, setSelectedCateg }) => {
  return (
    <div className="sticky shadow  p-2">
      <MotionTitle />
      <Categories selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg} />
    </div>
  );
};
