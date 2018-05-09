import { SecurityCheck } from "../SecurityCheck";
import { SecurityCheckResult } from "../SecurityCheckResult";

declare var device: any;

/**
 * Security check to detect if a device is running in an emulator.
 */
export class NonEmulatedCheck implements SecurityCheck {
  /**
   * Get the name of the check.
   */
  get name(): string {
    return "Emulator Check";
  }

  /**
   * Determine whether an app is being run in an emulator or not.
   * If the device is *not* running in an emulator then the check will pass.
   *
   * @returns The result of the check.
   */
  public check(): Promise<SecurityCheckResult> {
    return new Promise((resolve, reject) => {
      if (!device) {
        reject(new Error("Could not find plugin device."));
        return;
      }
      const result: SecurityCheckResult = { name: this.name, passed: !device.isVirtual };
      return resolve(result);
    });
  }
}
