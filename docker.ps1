docker run `
  -it `
  --mount type=bind,source=$((Get-Location).Path),target=/projects/lynncyrin-dot-me `
  --workdir=/projects/lynncyrin-dot-me `
  --network=host `
  --name lynncyrin-dot-me `
  circleci/node:12 `
  bash
