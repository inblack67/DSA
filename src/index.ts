import { partitionIntoSubsets } from './Algo/DynamicProgramming/PartitionIntoSubsets';

const main = async () => {
  partitionIntoSubsets(4, 3);
};

main().catch((err) => console.error(err));
