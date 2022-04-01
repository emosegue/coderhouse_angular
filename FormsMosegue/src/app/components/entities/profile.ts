export class Profile {
  profile: profileType;

  constructor(profile: profileType) {
    this.profile = profile;
  }
}

enum profileType {
  Administrator,
  User,
}
