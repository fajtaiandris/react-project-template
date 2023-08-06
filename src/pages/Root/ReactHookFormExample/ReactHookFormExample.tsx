import { zodResolver } from '@hookform/resolvers/zod';
import cx from 'classix';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';

import { Button } from '@ui/Button';

enum Role {
  developer = 'developer',
  tester = 'tester',
  projectManager = 'projectManager',
  businessAnalyst = 'businessAnalyst',
}

type Inputs = {
  name: string;
  nickname: string;
  role: Role;
  experience: number;
  favouriteEmojis: string;
};

export function ReactHookFormExample() {
  const schema: ZodType<Inputs> = z.object({
    name: z
      .string()
      .min(2, 'Your name should be at least 2 characters long')
      .max(30, 'Your name should be less then 30 charaters long'),
    nickname: z.string(),
    role: z.enum([Role.businessAnalyst, Role.developer, Role.projectManager, Role.tester]),
    experience: z
      .number({
        invalid_type_error: 'Please enter your number of years of experience',
      })
      .min(0, 'Your experience should be at least 0 years')
      .max(50, 'Your experience should be less than 50 years'),
    favouriteEmojis: z.string().emoji("You've entered something other than emojis"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const [submission, setSubmission] = useState<Inputs | null>(null);
  const onSubmit: SubmitHandler<Inputs> = (data) => setSubmission(data);

  const defaultValues: Inputs = {
    name: 'Jane Doe',
    nickname: 'JD',
    role: Role.projectManager,
    experience: 1,
    favouriteEmojis: '💜',
  };

  return (
    <>
      <h1 className="text-xl font-semibold">📋 React Hook Form</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
        <p>
          <span className="text-lg font-semibold">#1</span> To create forms use React Hook Form and use Zod to validate
          them.
        </p>
        <p>
          <span className="text-lg font-semibold">#2</span> Try it out:
        </p>
        <div className="rounded border border-purple-600 bg-purple-200 p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              <label className="mr-4 w-1/3 text-purple-600" htmlFor="name">
                Name
              </label>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className={cx(
                  'mb-2 w-2/3 rounded bg-purple-50 px-2 text-purple-600 outline-purple-600 focus:outline',
                  errors.name && 'outline outline-1 outline-red-500',
                )}
                defaultValue={defaultValues.name}
                {...register('name', { required: true })}
              />
            </div>
            {!!errors.name && <div className="mb-2 rounded bg-red-500 px-4 py-2 text-white">{errors.name.message}</div>}
            <div className="flex">
              <label className="mr-4 w-1/3 text-purple-600" htmlFor="nickname">
                Nickname
              </label>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className={cx(
                  'mb-2 w-2/3 rounded bg-purple-50 px-2 text-purple-600 outline-purple-600 focus:outline',
                  errors.nickname && 'outline outline-1 outline-red-500',
                )}
                defaultValue={defaultValues.nickname}
                {...register('nickname')}
              />
            </div>
            {!!errors.nickname && (
              <div className="mb-2 rounded bg-red-500 px-4 py-2 text-white">{errors.nickname.message}</div>
            )}
            <div className="flex">
              <label className="mr-4 w-1/3 text-purple-600" htmlFor="role">
                Role
              </label>
              <select
                className={cx(
                  'mb-2 h-8 w-2/3 rounded bg-purple-50 px-2 text-purple-600 outline-purple-600 focus:outline',
                  errors.role && 'outline outline-1 outline-red-500',
                )}
                {...register('role')}
                defaultValue={defaultValues.role}
              >
                <option value="developer">Developer</option>
                <option value="tester">Tester</option>
                <option value="projectManager">Project Manager</option>
                <option value="businessAnalyst">Business Analyst</option>
              </select>
            </div>
            {!!errors.role && <div className="mb-2 rounded bg-red-500 px-4 py-2 text-white">{errors.role.message}</div>}
            <div className="flex">
              <label className="mr-4 w-2/3 text-purple-600" htmlFor="experience">
                Experience (years)
              </label>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className={cx(
                  'mb-2 w-1/3 rounded bg-purple-50 px-2 text-center text-purple-600 outline-purple-600 focus:outline',
                  errors.experience && 'outline outline-1 outline-red-500',
                )}
                defaultValue={defaultValues.experience}
                {...register('experience', { required: true, valueAsNumber: true })}
              />
            </div>
            {!!errors.experience && (
              <div className="mb-2 rounded bg-red-500 px-4 py-2 text-white">{errors.experience.message}</div>
            )}
            <div className="flex">
              <label className="mr-4 w-2/3 text-purple-600" htmlFor="emoji">
                Favourite emojis
              </label>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className={cx(
                  'mb-2 w-1/3 rounded bg-purple-50 px-2 text-center text-purple-600 outline-purple-600 focus:outline',
                  errors.favouriteEmojis && 'outline outline-1 outline-red-500',
                )}
                defaultValue={defaultValues.favouriteEmojis}
                {...register('favouriteEmojis')}
              />
            </div>
            {!!errors.favouriteEmojis && (
              <div className="mb-2 rounded bg-red-500 px-4 py-2 text-white">{errors.favouriteEmojis.message}</div>
            )}
            <Button text="Submit" className="mt-2 w-full" type="submit"></Button>
          </form>
        </div>
        {!!submission && (
          <div className="rounded bg-gray-100 px-4 py-2 shadow">
            <p className="font-semibold">🎉 Yaay! </p>
            <p>Here is your submission:</p>
            <p className="my-2 rounded bg-gray-600 p-2 font-mono text-sm text-white">
              {JSON.stringify(submission, null, 2)}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
