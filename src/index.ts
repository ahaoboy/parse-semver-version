const reg =
  /^[v|V]??(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export type Version = [
  major: string | undefined,
  minor: string | undefined,
  patch: string | undefined,
  preReleaseTag: string | undefined,
  preReleaseVersion: string | undefined,
  preReleaseString: string | undefined
];

export default (version: string): Version => {
  const matches = version.match(reg) || [];
  const [_, major, minor, patch, preRelease] = matches;
  const [tag, preReleaseVersion] = preRelease?.split(".") || [];
  return [major, minor, patch, tag, preReleaseVersion, preRelease];
};
